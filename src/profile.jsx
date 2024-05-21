import { DiHtml5, DiCss3, DiJavascript, DiReact, DiPostgresql, DiBootstrap, DiJava } from "react-icons/di";
export function Profile(){
    return(
        <section className="border">
            <div class="card" style={{borderRadius: "15px"}}>
            <div class="card-body p-4">
                <div class="d-flex">
                <div class="flex-shrink-0">
                    <p style={{fontSize: "4rem"}}>👋</p>
                </div>
                <div class="flex-grow-1 ms-3">
                    <h5 class="mb-1">Carl Bajo</h5>
                    <p class="mb-2 pb-1">
                    Information Technology Student
                    </p>
                    <div class="d-flex justify-content-start rounded-3 p-2 mb-2 bg-body-tertiary gap-2 border" style={{flexDirection: "column"}}>
                        <div>
                            <p class="small text-muted mb-1">
                            Course
                            </p>
                            <p class="mb-0">Bachelor of Science in Information and Technology</p>
                        </div>
                        <div>
                            <p class="small text-muted mb-1">
                            Age
                            </p>
                            <p class="mb-0">21</p>
                        </div>
                        <div>
                            <p class="small text-muted mb-1">
                            Status
                            </p>
                            <p class="mb-0">Single</p>
                        </div>
                        <div>
                            <p class="small text-muted mb-1">
                            Tools
                            </p>
                            <div className="d-flex gap-2" style={{flexWrap: "wrap"}}>
                                <DiHtml5 size={30}/>
                                <DiCss3 size={30}/>
                                <DiJavascript size={30}/>
                                <DiReact size={30}/>
                                <DiPostgresql size={30}/>
                                <DiBootstrap size={30}/>
                                <DiJava size={30} />
                            </div>
                        </div>
                    </div>
                    <blockquote>
                    <p className="text-muted fst-italic">I’m  proficient in HyperText Markup Language (HTML), Cascading Style Sheets (CSS), and JavaScript, including frameworks such as React and NextJS. I have experience in database management using PostgreSQL and MySQL, and I possess basic programming skills in Java and Python. Additionally, I am capable of basic image editing and have at least familiarity with mobile app development using React Native.</p>
                    </blockquote>
                    <div class="d-flex pt-1">
                    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary me-1 flex-grow-1">
                        Message me
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
};