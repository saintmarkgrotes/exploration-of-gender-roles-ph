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
        <div className="p-10 max-w-[640px] mx-auto my-[60px] font-sans">
          <h2 className="font-serif">
            Something broke while rendering this page
          </h2>
          <p className="text-ink-soft">
            This is usually a missing import, a typo in a component, or a
            file that wasn't saved in the right place. The exact error is
            below — check it against the file it names.
          </p>
          <pre className="bg-paper-dim p-4 rounded-md overflow-x-auto text-[13px] whitespace-pre-wrap">
            {this.state.error.message}
          </pre>
          <button
            onClick={() => this.setState({ error: null })}
            className="mt-4 px-4 py-2.5 border border-line rounded-md bg-transparent cursor-pointer hover:bg-paper-dim transition-colors duration-150"
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}