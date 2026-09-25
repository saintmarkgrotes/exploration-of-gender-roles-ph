import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          padding: 40, maxWidth: 640, margin: "60px auto",
          fontFamily: "Inter, system-ui, sans-serif",
        }}>
          <h2 style={{ fontFamily: "'Source Serif 4', serif" }}>
            Something broke while rendering this page
          </h2>
          <p style={{ color: "#5B6156" }}>
            This is usually a missing import, a typo in a component, or a
            file that wasn't saved in the right place. The exact error is
            below — check it against the file it names.
          </p>
          <pre style={{
            background: "#F1EEE5", padding: 16, borderRadius: 6,
            overflowX: "auto", fontSize: 13, whiteSpace: "pre-wrap",
          }}>
            {this.state.error.message}
          </pre>
          <button
            onClick={() => this.setState({ error: null })}
            style={{
              marginTop: 16, padding: "10px 16px", border: "1px solid #E1DCCC",
              borderRadius: 6, background: "none", cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
