import styles from "@/app/page.module.css";
import { Profile } from "@/profile";
import { Education } from "@/education";
import { Project } from "@/project";
import { Achievement } from "@/achievement";
export default function Page(){
    return(
        <div className="col-9 d-grid gap-3">
            <Profile />
            <Education />   
            <Project />
            <Achievement />
        </div>
    );
};