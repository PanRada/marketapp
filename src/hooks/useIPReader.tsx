import {useState} from 'react';

interface UseIPReader {
  ipInfo: any;
  ipInput: string;
  city: string;
  timezone: string;
  setIpInfo: React.Dispatch<React.SetStateAction<any>>;
  setIpInput: React.Dispatch<React.SetStateAction<string>>;
  setIpCity: React.Dispatch<React.SetStateAction<string>>;
  setTimezone: React.Dispatch<React.SetStateAction<string>>;
}

export interface IpInfo {
  ip: string;
  isp: string;
  city: string;
  timezone: string;
}

export const useIPReader = (): UseIPReader => {
  const [ipInfo, setIpInfo] = useState<IpInfo | null>(null);
  const [ipInput, setIpInput] = useState<string>('');
  const [city, setIpCity] = useState<string>('');
  const [timezone, setTimezone] = useState<string>('');
  return {
    ipInfo,
    ipInput,
    city,
    timezone,
    setTimezone,
    setIpCity,
    setIpInfo,
    setIpInput,
  };
};
