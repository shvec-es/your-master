import axios from 'axios';

export const POST = async (req) => {
  const body = await req.json();
  const { text } = body;

  // const YM_TOKEN = process.env.YM_TOKEN;
  const YM_TOKEN = '8264430617:AAG9Fn0TBvMSPGtCnSvzC49LWQM5Riu-9SA';
  // const YM_CHAT_ID = process.env.YM_CHAT_ID;
  const YM_CHAT_ID = '5103149319';
  const TG_URL = `https://api.telegram.org/bot${YM_TOKEN}/sendMessage?chat_id=${YM_CHAT_ID}`;

  try {
    await axios.post(TG_URL, {
      text,
      parse_mode: 'HTML',
    });

    return new Response('OK', { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Помилка надсилання', { status: 500 });
  }
};
