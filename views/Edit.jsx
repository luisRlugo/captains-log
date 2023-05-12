const React = require("react");

class Edit extends React.Component {
  render() {
    const logs = this.props;
    return (
      <div>
        <h1>Edit Log Entry</h1>
        <form action={`/logs/${logs._id}?_method=PUT`} method="POST">
          <label>Title:</label>
          <input type="text" name="title" defaultValue={logs.title} />

          <label>Entry:</label>
          <input type="textarea" name="entry" defaultValue={logs.entry} />

          <label>Is the ship broken?</label>
          <input
            type="checkbox"
            name="shipIsBroken"
            defaultChecked={logs.shipIsBroken}
          />
          <input type="submit" value="Update Log Entry" />
        </form>
      </div>
    );
  }
}
module.exports = Edit;
