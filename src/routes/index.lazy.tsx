import { BubbleBackground } from "@/components/BubleBackground";
import { useFetchUser } from "@/hooks/useFetchUser";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCallback, useRef, useState } from "react";
import { Loading } from "@/components/Loading";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Footer } from "@/components/Footer";
import { useReadmeStore } from "@/stores";
import { useReadmeFormStore } from "@/stores/readmeForm/readmeForm.store";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

const formSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1)
    .max(39)
    .regex(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i, {
      message: "Invalid Github username",
    }),
});

function Index() {
  const setGithubUser = useReadmeStore((state) => state.setGithubUser);
  const [githubUsername, setGithubUsername] = useState("");
  const { data, error, isLoading } = useFetchUser(githubUsername);
  const navigate = useNavigate({ from: "/" });
  const driverRef = useRef<ReturnType<typeof driver> | null>(null);
  const inputRef = useCallback((node: HTMLInputElement | null) => {
    if (!node) return;

    const driverObj = driver();
    driverRef.current = driverObj;
    driverObj.highlight({
      element: node,
      popover: {
        title: "Enter a GitHub username",
        description:
          "Or use developerleonardo if you don't have an account and you want to see how it works.",
        side: "bottom",
      },
    });
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  const resetForm = useReadmeFormStore((state) => state.resetForm);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await setGithubUsername(values.username.trim());
    resetForm();
  }

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  if (data) {
    driverRef.current?.destroy();
    setGithubUser(data);
    navigate({
      to: `/generate/${data.login}`,
      params: { username: data.login },
    });
    return null;
  }

  return (
    <div className="min-h-svh max-w-7xl w-full h-full grid-cols-1 grid lg:grid-cols-[448px_1fr] px-6 pt-24 pb-8 place-items-center grid-rows-[1fr_60px] gap-6 lg:gap-12">
      <section className="flex flex-col max-w-md">
        <h1 className="text-4xl font-bold mb-9 text-heading-1">
          Your Github Deserves More Than an Empty README
        </h1>
        <p className="text-base">
          Enter your GitHub username and get a personalized README you can be
          proud of.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full max-w-md gap-4 mt-9"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      id="github-username"
                      placeholder="your github username"
                      {...field}
                      ref={inputRef}
                    />
                  </FormControl>
                  <FormDescription>
                    Use developerleonardo if you don't have an account.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full mt-6">
              Get Started
            </Button>
          </form>
        </Form>
      </section>
      <img
        src="./img/onboarding.webp"
        alt="Hero image"
        width={571}
        height={390}
        className="mt-12 hidden lg:block"
      />
      <BubbleBackground />
      <Footer />
    </div>
  );
}
