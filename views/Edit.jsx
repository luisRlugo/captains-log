const React = require("react");

class Edit extends React.Component {
  render() {
    const { log } = this.props;
    return (
      <div>
        <h1>Edit Log Entry</h1>
        <form action={`/logs/${log._id}?_method=PUT`} method="POST">
          <label>Title:</label>
          <input type="text" name="title" defaultValue={log.title} />

          <label>Entry:</label>
          <input type="textarea" name="entry" defaultValue={log.entry} />

          <label>Is the ship broken?</label>
          <input
            type="checkbox"
            name="shipIsBroken"
            defaultChecked={log.shipIsBroken}
          />
          <input type="submit" value="Update Log Entry" />
        </form>
      </div>
    );
  }
}
module.exports = Edit;
