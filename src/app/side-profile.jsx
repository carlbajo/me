import { Profile } from "@/profile";
export function SideProfile(){
    return(
        <div className="bg-light bg-gradient col-3 shadow border rounded p-5" style={{
            height: "fit-content"
        }}>
            <div className="d-flex justify-content-center align-items-center" style={{flexDirection: "column"}}>
                <img src="/me.jpeg" class="rounded-circle mb-3 object-fit-cover" style={{width: "150px", height: "150px"}}
                alt="Avatar" />
                <div className="text-center">
                    <h5 class="mb-2"><strong>Carl Bajo</strong></h5>
                    <p class="text-muted">Web developer<span class="badge bg-primary">Beginner</span></p>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};