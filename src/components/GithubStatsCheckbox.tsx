import { useReadmeFormStore } from "@/stores/readmeForm/readmeForm.store";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

export const GithubStatsCheckbox = () => {
  const showGithubStats = useReadmeFormStore(
    (state) => state.readmeContent.showGithubStats
  );
  const showGithubTrophies = useReadmeFormStore(
    (state) => state.readmeContent.showGithubTrophies
  );
  const showTopRepos = useReadmeFormStore(
    (state) => state.readmeContent.showTopRepos
  );

  const toggleBooleanField = useReadmeFormStore(
    (state) => state.toggleBooleanField
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Checkbox
          id="showGithubStats"
          checked={showGithubStats}
          onCheckedChange={() => toggleBooleanField("showGithubStats")}
        />
        <Label htmlFor="showGithubStats">Show Github Stats</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox
          id="showGithubTrophies"
          checked={showGithubTrophies}
          onCheckedChange={() => toggleBooleanField("showGithubTrophies")}
        />
        <Label htmlFor="showGithubTrophies">Show Github Trophies</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox
          id="showTopRepos"
          checked={showTopRepos}
          onCheckedChange={() => toggleBooleanField("showTopRepos")}
        />
        <Label htmlFor="showTopRepos">Show Top Contributed Repos</Label>
      </div>
    </div>
  );
};
