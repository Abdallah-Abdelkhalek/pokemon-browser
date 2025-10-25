import React from "react";
export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; isOffline: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, isOffline: !navigator.onLine };
  }

  static getDerivedStateFromError() {
    return { hasError: true, isOffline: false };
  }

  componentDidMount() {
    window.addEventListener("online", this.handleOnline);
    window.addEventListener("offline", this.handleOffline);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.handleOnline);
    window.removeEventListener("offline", this.handleOffline);
  }

  handleOnline = () => {
    this.setState({ isOffline: false });
  };

  handleOffline = () => {
    this.setState({ isOffline: true });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    const { hasError, isOffline } = this.state;

    // Handle offline globally
    if (isOffline) {
      return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h2 className="text-blue-500 mb-4 text-xl font-semibold">
            You’re offline.
          </h2>
          <p className="text-gray-600 mb-6">
            Please check your internet connection and try again.
          </p>
          <button
            onClick={this.handleReload}
            className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
          >
            Retry
          </button>
        </div>
      );
    }

    // Handle general React errors
    if (hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h2 className="text-red-600 mb-4 text-xl font-semibold">
            Something went wrong.
          </h2>
          <button
            onClick={this.handleReload}
            className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 transition"
          >
            Reload
          </button>
        </div>
      );
    }

    // Normal render
    return this.props.children;
  }
}
