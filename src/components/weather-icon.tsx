interface WeatherIconProps {
  type: string;
  size?: number;
}

export function WeatherIcon({ type, size = 24 }: WeatherIconProps) {
  const getIconByType = () => {
    switch (type.toLowerCase()) {
      case "맑음":
      case "clear":
      case "sunny":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-500"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <path d="M12 1v2"></path>
            <path d="M12 21v2"></path>
            <path d="M4.22 4.22l1.42 1.42"></path>
            <path d="M18.36 18.36l1.42 1.42"></path>
            <path d="M1 12h2"></path>
            <path d="M21 12h2"></path>
            <path d="M4.22 19.78l1.42-1.42"></path>
            <path d="M18.36 5.64l1.42-1.42"></path>
          </svg>
        );

      case "흐림":
      case "구름":
      case "cloudy":
      case "overcast":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500"
          >
            <path d="M17.5 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
            <path d="M10 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
            <path d="M20 16.5a2.5 2.5 0 0 0-5 0v.5"></path>
            <path d="M12 16a2 2 0 0 0-4 0v1"></path>
            <path d="M12 16a2 2 0 0 1 4 0v.5"></path>
            <path d="M10 13V7a3 3 0 1 1 6 0v4.5"></path>
          </svg>
        );

      case "비":
      case "rainy":
      case "rain":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-500"
          >
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
            <path d="M16 14v6"></path>
            <path d="M8 14v6"></path>
            <path d="M12 16v6"></path>
          </svg>
        );

      case "눈":
      case "snowy":
      case "snow":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-300"
          >
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
            <path d="M8 15h.01"></path>
            <path d="M8 19h.01"></path>
            <path d="M12 17h.01"></path>
            <path d="M12 21h.01"></path>
            <path d="M16 15h.01"></path>
            <path d="M16 19h.01"></path>
          </svg>
        );

      case "폭풍":
      case "번개":
      case "천둥":
      case "stormy":
      case "thunderstorm":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-yellow-500"
          >
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
            <path d="M13 12l2 3h-3l2 3"></path>
          </svg>
        );

      case "안개":
      case "foggy":
      case "fog":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <path d="M3 7h5m7 0h6"></path>
            <path d="M3 11h12m3 0h3"></path>
            <path d="M3 15h4m5 0h9"></path>
            <path d="M5 19h8m6 0h2"></path>
          </svg>
        );

      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.5 9A.5.5 0 0 1 10 8.5v0a.5.5 0 0 1 .5.5v0a.5.5 0 0 1-.5.5v0a.5.5 0 0 1-.5-.5v0Z"></path>
            <path d="M14.5 9a.5.5 0 0 1 .5-.5v0a.5.5 0 0 1 .5.5v0a.5.5 0 0 1-.5.5v0a.5.5 0 0 1-.5-.5v0Z"></path>
            <path d="M8 14h.01"></path>
            <path d="M12 16v-5"></path>
            <path d="M16 14h.01"></path>
          </svg>
        );
    }
  };

  return getIconByType();
}
