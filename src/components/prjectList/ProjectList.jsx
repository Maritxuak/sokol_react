
import project_card1 from "../../images/project-card-1.jpg"
import project_card2 from "../../images/project-card-2.jpg"
const ProjectList = () => {
    return (
        <div className="project-list">
            <div className="row project-list__row">
                <div className="row__col--6 project-list__col project-list__col--el">
                    <div className="project-card project-list__card">
                        <div className="project-card__inner">
                            <picture className="project-card__picture">
                                <img src={project_card1} alt="" />
                            </picture>
                            <a href="#" className="project-card__link"></a>
                        </div>
                    </div>
                </div>
                <div className="row__col--6 project-list__col project-list__col--el">
                    <div className="project-card project-list__card">
                        <div className="project-card__inner">
                            <picture className="project-card__picture">
                                <img src={project_card2} alt="" />
                            </picture>
                            <a href="#" className="project-card__link"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectList;