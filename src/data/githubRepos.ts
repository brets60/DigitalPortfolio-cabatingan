export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  html_url: string;
  tag: string;
  stars?: number;
  forks?: number;
}

export const githubProfile = {
  username: "",
  profileUrl: "",
  bio: "Full-Stack Software Developer & Networking Specialist building practical digital systems and hardware integrations.",
};

// Emptied repositories and source code list as requested
export const githubRepos: GitHubRepo[] = [];
