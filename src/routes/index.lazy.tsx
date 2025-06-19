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
import { useState } from "react";
import { Loading } from "@/components/Loading";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Footer } from "@/components/Footer";
import { useReadmeStore } from "@/stores";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

const formSchema = z.object({
  username: z
    .string()
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
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await setGithubUsername(values.username);
  }

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  if (data) {
    setGithubUser(data);
    navigate({
      to: `/generate/${data.login}`,
      params: { username: data.login },
    });
    return null;
  }

  return (
    <div className="min-h-svh max-w-7xl w-full h-full grid grid-cols-[448px_1fr] px-6 pt-24 pb-8 place-items-center grid-rows-[1fr_60px]">
      <section className="flex flex-col">
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
                    <Input placeholder="developerleonardo" {...field} />
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
        src="./img/hero-project.webp"
        alt="Hero image"
        width={571}
        height={390}
        className="mt-12"
      />
      <BubbleBackground />
      <Footer />
    </div>
  );
}
