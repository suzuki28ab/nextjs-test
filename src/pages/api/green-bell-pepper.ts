// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const GetGreenBellPepper = (req: NextApiRequest, res: NextApiResponse) => {
  const responseData = {
    data: {
      name: 'ピーマン',
      imgUrl: 'https://blogger.googleusercontent.com/img/a/AVvXsEjWbldsntBPf9x67SzzpGo0I8T2uDKHSDUrzG3zExAM92pTVv-8Qp7_z_f4m-Qb6r_FfU9nx32W_UbvcHOe7asrOA87TXqIH9pzAidO65bS4n5blRxMAwbZO3HHqru9bya9w-wc_dIkM9KAMQzI_37D9mo0JpB334ONtrTzTDV9yOJBNSxGGKrP1Cqybg=s431'
    },
  }
  res.status(200).json(responseData)
}

export default GetGreenBellPepper
