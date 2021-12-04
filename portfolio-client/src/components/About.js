import '../styles/About.css';

export default () => {
    return (
        <div className="about-container">
            <section className='mb-2'>
                <h2 className=''>About Me</h2>
                <h3 class=''>
                    Full-Stack Web Developer  /  Huntington Beach, CA
                </h3>
                <p>
                    From my very first line of code I wrote and made "Hello World" appear on my computer screen I knew I was hooked. It was at that moment I knew becoming a Software Engineer is what I wanted to pursue as a career. I've always been driven by this goal constantly learning and pushing myself to achieve my dream. I knew that entering the exciting field of Software not only future-proofs my career but allowed my potential to have no limits. I pursued a career as a Software Developer knowing I have the ability to impact the future by creating it.
                </p>
            </section>
            <section>
                <hr className='' />
                <h2 className=''>My Skills</h2>
                <div className="row">
                    <div className="about-row-div">
                        <i className="fas fa-tv"></i>
                        <h3>Front-End</h3>
                        <p>
                            JavaScript, React, Angular, jQuery, CSS 3, HTML 5, AJAX
                        </p>
                    </div>
                    <div className="about-row-div">
                        <i className="fas fa-database"></i>
                        <h3>Back-End</h3>
                        <p>
                            T-SQL, SQL Server 2017, MongoDb, MongoDb Atlas Compass, Postgres
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="about-row-div">
                        <i className="fas fa-server"></i>
                        <h3>Middle Tier</h3>
                        <p>
                            NodeJS, JavaScript, ASP.Net, C#, MVC, Web Api
                        </p>
                    </div>
                    <div className="about-row-div">
                        <i className="fas fa-boxes"></i>
                        <h3>Other Technical</h3>
                        <p>
                            TFS, Agile/Scrum Methodologies, Visual Studio Code, API Integration, Git
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <hr />
                <h2>Experience</h2>
                <div className="job-card">
                    <div className="job-info">
                        <h3>JAN 2021 - MAR 2021</h3>
                        <h2>
                            Free-Lance Developer
                        </h2>
                        <h3>DevMakers</h3>
                        <p>
                            Contracted to assist the development
                            team with creating an educational curriculum
                            with a focus on the professional development
                            of software engineers looking to progress in
                            their careers. Additional tasks include
                            creating a company website.
                        </p>
                    </div>
                    <div id='devMakers' className="job-logo"></div>
                </div>
                <div className="job-card">
                    <div className="job-info">
                        <h3>AUG 2019 - JAN 2020</h3>
                        <h2>
                            Full-Stack Developer
                        </h2>
                        <h3>Everyonic</h3>
                        <p>
                            Contracted to assist a team of three developers in the development of two projects. The first was a large full-scale online betting platform that allowed users to bet on competitive fantasy and real-world sports leagues. The second was creating a customized admissions process for the Golden West College’s online registration.
                        </p>
                    </div>
                    <div id='everyonic' className="job-logo"></div>
                </div>
                <div className="job-card">
                    <div className="job-info">
                        <h3>AUG 2019 - JAN 2020</h3>
                        <h2>
                            Information Developer
                        </h2>
                        <h3>Perspecta/City Of Anaheim</h3>
                        <p>
                            Assigned to the city of Anaheim’s applications and information development team to assist in the creation of an application to process and extract the data from tickets issued for use by attorneys and court officials. Additional tasks were to support business analysts along with maintenance and updating announcements from local city departments to reflect on City of Anaheim's website.
                        </p>
                    </div>
                    <div id='anaheim' className="job-logo"></div>
                </div>
                <div className="job-card">
                    <div className="job-info">
                        <h3>JUL 2019 - OCT 2019</h3>
                        <h2>
                            Assistant Instructor
                        </h2>
                        <h3>Redwood Code Academy</h3>
                        <p>
                        Assisted lead instructor with the execution of an evening Full-Stack continuing ed course while maintaining a challenging and informative learning environment in support of students' growth and learning.
                        </p>
                    </div>
                    <div id='redwood' className="job-logo"></div>
                </div>
            </section>
        </div>
    )
}

