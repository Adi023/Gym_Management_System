import React from 'react';
import ErrorPage from './components/ErrorPage';
function logErrorToMyService(error, errorInfo) {
  // Error logging logic
  console.error('Error occurred:', error);
  console.error('Error info:', errorInfo);
}
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <><ErrorPage/></>;
    }

    return this.props.children; 
  }
}