export const getWeatherImageUrl = (id: string) => {
  return `${process.env.NEXT_PUBLIC_WEATHER_API_IMG}/${id}`;
};
