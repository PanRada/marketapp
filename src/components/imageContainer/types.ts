export type ImageProps = {
  uri: string;
  id?: string | undefined;
  handlePress?: (id: string | undefined) => void;
  testID?: string;
  onError?: () => void;
};
