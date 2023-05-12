const React = require("react");

class Index extends React.Component {
  render() {
    const { logs } = this.props;
    return (
      <div>
        <h1>Captain's Logs</h1>
        <a href={"/logs/new"}> Create New Entry</a>
        <ul>
          {logs.map((log, i) => {
            return (
              <li key={i}>
                Title: <a href={`/logs/${log._id}`}>{log.title}</a> <br />
                Entry: {log.entry} <br></br>
                Ship Status:{" "}
                {log.shipIsBroken ? `It is broken` : `It is not broken`}
                <br />
                <a href={`/logs/${log._id}/edit`}>Edit Captain Log</a>
                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
