// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const GetPaprikas = (req: NextApiRequest, res: NextApiResponse) => {
  const red = {
    name: '赤パプリカ',
    imgUrl:
      'https://blogger.googleusercontent.com/img/a/AVvXsEhatkBosmga0ZvYuzZGD41Mv0LvzdXhasdGJ8cucny8SbnxTU4diMy40U-iXDQgqVJdJoFfX3LSsn6yh9-8-J7w20xQRURgN-xU0GXycVJFSUb3aUzFgvfZ3VIgVcX1I4AHybqAGqTtTGuEmvfTIO01PWIx1JH-NI7AMT-EPKN1bLOOSaramC3PzBV8Kw=s431',
  }

  const orange = {
    name: 'オレンジパプリカ',
    imgUrl:
      'https://blogger.googleusercontent.com/img/a/AVvXsEhiRseqXkdrYI74TS5y4-eN7ALkefKvdFo7pZioisEZueHLG0F_1BsXktfyaRAu5O6nCzNJcmkvpqj6sirpp2J5a2qV1ewlg2cE0p5dwzU1ZicfhmjBmhBJGOojxyMMoJNbohft_8XBK6EDzrN5W2jXapwRY0BV4zL1UFljGyU-Pod3juyqJF4O-H2r-A=s431',
  }

  const yellow = {
    name: '黄パプリカ',
    imgUrl:
      'https://blogger.googleusercontent.com/img/a/AVvXsEiopOdRT0RouIA89Je9LeX4KJKujsWFxFlJrYZ0q2IuDxEU2_cKT5ei9NMEcWHI6ZmIxoDFUsTWrLyQ88vw6TxlCJsAF1VjSRqBo3qr8_DFhLMs8wpXzaXuf9WraHufsmJ94YIrNDearvuK1kziOU_dHyOqLoam_ZwzIhasqCQBHE6kUjJ2eHgnzcjdJg=s431',
  }

  const responseData = {
    data: [red, orange, yellow],
  }
  res.status(200).json(responseData)
}

export default GetPaprikas
