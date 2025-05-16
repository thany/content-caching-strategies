'use server';

export type Customers = Array<string>;

// Shared data fetching function
export const getCustomers = async(): Promise<Customers> => {
  const res = await fetch('https://randommer.io/Name', {
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: 'type=fullname&number=20&X-Requested-With=XMLHttpRequest',
    method: 'POST',
    cache: 'no-cache',
  });

  return res.json();
};
