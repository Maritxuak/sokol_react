import ProjectList from "../prjectList/ProjectList"




const TypicalSection = () =>{
    return(
        <section class="typical-section">
        <div class="container container--size-md typical-section__container">
          <header class="typical-section__header">
            <h2 class="typical-section__title">Похожие проекты</h2>
            <div class="content typical-section__text">
              <p>Изучите наши проекты по лендингам и мультилендингам в действии, чтобы увидеть, как мы оптимизируем концепции в результате.</p>
            </div>
          </header>
         <ProjectList />
        </div>
      </section>
    )
}

export default TypicalSection;