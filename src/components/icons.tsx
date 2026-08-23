type IconProps = {
  className?: string;
  strokeWidth?: number;
};

function Icon({
  className = "h-6 w-6",
  strokeWidth = 1.4,
  children
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export function HookIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 3v9a4 4 0 1 0 8 0v-1" />
      <path d="M17 6a2.5 2.5 0 1 0-3-4" />
    </Icon>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.6 2.3 4 5.3 4 8.5s-1.4 6.2-4 8.5c-2.6-2.3-4-5.3-4-8.5s1.4-6.2 4-8.5Z" />
    </Icon>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 20.5s-7.5-4.6-9.8-9.3C.6 7.7 2.4 4.5 5.7 4c2-.3 3.9.7 6.3 3.1C14.4 4.7 16.3 3.7 18.3 4c3.3.5 5.1 3.7 3.5 7.2C19.5 15.9 12 20.5 12 20.5Z" />
    </Icon>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <Icon {...{ className: "h-5 w-5", ...props }}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <Icon {...{ className: "h-5 w-5", ...props }}>
      <path d="M15.5 8.5h-2a1.5 1.5 0 0 0-1.5 1.5v2h3.3l-.5 3H12v7.5H9V15h-2v-3h2v-2.3C9 7.6 10.4 6 13 6h2.5v2.5Z" />
    </Icon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Icon {...{ className: "h-4 w-4", ...props }}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3.5 6 8.5 6.5L20.5 6" />
    </Icon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Icon {...{ className: "h-4 w-4", ...props }}>
      <path d="M6.5 2.5c1.2 0 1.4.3 2 1.9.5 1.3.9 2.2.2 3.1l-1 1.3a12 12 0 0 0 5.5 5.5l1.3-1c.9-.7 1.8-.3 3.1.2 1.6.6 1.9.8 1.9 2v1.6c0 1.6-1.4 2.6-2.9 2.2C10.6 17.9 6.1 13.4 4.7 7.4c-.4-1.5.6-2.9 2.2-2.9h-.4Z" />
    </Icon>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 21.5S5 15.4 5 10a7 7 0 1 1 14 0c0 5.4-7 11.5-7 11.5Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Icon>
  );
}
