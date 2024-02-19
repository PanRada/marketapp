export type SearchProps = {
  setIpInput: React.Dispatch<React.SetStateAction<string>>;
  ipInput: string;
  fetchIpInfo: (ip: string) => void;
};
