import Error from '@/components/fallback/Error';
import { ThirtyFpsSelect } from '@mui/icons-material';
import { AxiosError } from 'axios';
import React, { Component } from 'react';

type Props = {
  children: React.ReactNode;
};

type State = {
  error: { code: string | number; message: string } | null;
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { error: error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    if (error instanceof AxiosError && error.response?.data) {
      this.setState({
        error: { code: error.code!, message: error.response.data.details },
      });
    } else if (error instanceof AxiosError) {
      this.setState({
        error: { code: error.code!, message: error.message },
      });
    } else {
      this.setState({
        error: {
          code: error?.code || 'NOT_DEFINED_ERROR',
          message: error?.message || '알 수 없는 에러',
        },
      });
    }
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return <Error error={this.state.error} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
