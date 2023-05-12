const React = require("react");

class Show extends React.Component {
  render() {
    const { log } = this.props;
    return (
      <div>
        <h1>Title: {log.title}</h1>
        <p>Entry: {log.entry}</p>
        <p>Ship is broken: {log.shipIsBroken ? "Yes" : "No"}</p>
        <a href="/logs">Back to Log List</a>
      </div>
    );
  }
}
module.exports = Show;
