import _ from 'lodash';
import { useEffect, useState } from 'react';

import useAuthRights from './useAuthRights';

/**
 * Hook to check if the user has admin rights. Utilizes the useAuth hook.
 * @returns {Object} { isLoading, hasAdminRights }
 * */
export default function useAdminRights(): {
  isLoading: boolean;
  hasAdminRights: boolean;
} {
  const [isLoading, setIsLoading] = useState(true);
  const [hasAdminRights, setHasAdminRights] = useState(false);
  const { isLoading: isAuthLoading, user } = useAuthRights();

  useEffect(() => {
    if (!isAuthLoading) {
      setIsLoading(false);
      const role = _.get(user, 'role', 'customer');
      setHasAdminRights(role === 'admin');
    }
  }, [user, isAuthLoading]);

  return { isLoading, hasAdminRights };
}
