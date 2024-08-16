function skillsMember() {
  const member = document.querySelector('meta[name="member"]').content;
  const skillGraph = document.querySelector('meta[name="skill-graph"]').content;

  const container = document.querySelector('.js-skill-graph-container');

  if (container) {
    ReactDOM.render(
      React.createElement(SkillGraph, {
        member,
        skillGraph,
      }),
      container,
    );
  }
}