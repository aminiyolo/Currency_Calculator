interface Props {
  message?: string;
}

function RejectedFallback({ message = '에러가 발생했습니다.' }: Props) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default RejectedFallback;
