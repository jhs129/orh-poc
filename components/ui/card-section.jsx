function CardSection(props) {
  return (
    <section id="card-section" className="mx-auto max-w-7xl flex flex-col">
      <div className="w-fulltext-center"><h2 className="px-2">{props.headline}</h2></div>
      <div id="cardflex" className="flex flex-col md:flex-row max-w-full gap-4 flex-wrap justify-items-center">
        {props.children}
      </div>
    </section>
  );
}

export default CardSection;