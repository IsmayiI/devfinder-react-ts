import { GithubUser } from "../types";

export const isGuthubUser = (user: any): user is GithubUser => 'id' in user