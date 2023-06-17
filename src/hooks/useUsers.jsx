import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const {
    data: classes = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://assignment12-zeta.vercel.app/users");
      return res.json();
    },
  });

  return [classes, loading, refetch];
};

export default useUsers;
