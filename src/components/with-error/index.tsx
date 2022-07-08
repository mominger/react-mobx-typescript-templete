import { withErrorBoundary, FallbackProps } from 'react-error-boundary';
import Log from '@/helper/log';

/**
 * error catch for react component
 * @param WrapComponent
 * @returns
 */
//
export default function withError(WrapComponent) {
  return withErrorBoundary(WrapComponent, {
    FallbackComponent: ({ error }: FallbackProps) => {
      return (
        <div>
          Error:
          <div>{error.message}</div>
        </div>
      );
    },
    onError(error, info) {
      Log.error(error + info.componentStack);
    },
  });
}
