import type { GithubRepository } from '@/interfaces/GithubRepository';
import get  from 'axios';

export default function getRepos(): Promise<GithubRepository>{
    
    return get("https://api.github.com/users/subzer288/repos");
}