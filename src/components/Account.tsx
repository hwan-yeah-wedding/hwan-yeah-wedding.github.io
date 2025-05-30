import contact from "../assets/contact.png?url";

const manAccounts = [
  {
    name: "서환수",
    bank: "우리은행",
    account: "1002-650-368224",
  },
  {
    name: "서만근",
    bank: "농협은행",
    account: "865-12-034276",
  },
];

const womanAccounts = [
  {
    name: "채예진",
    bank: "우리은행",
    account: "1002-043-900493",
  },
  {
    name: "채래문",
    bank: "국민은행",
    account: "818701-00-185778",
  },
  {
    name: "나희숙",
    bank: "국민은행",
    account: "253401-04-035966",
  },
];

const Account = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    navigator.clipboard.writeText(value);
    alert("복사되었습니다.");
  };

  return (
    <div className="h-auto flex items-start justify-center">
      <div className="bg-white w-full max-w-md p-6 mb-10">
        <div className="mt-4 flex items-center justify-center">
          <img src={contact} className="title-contact" />
        </div>
        <div className="text-center mt-12">
          <p className="mb-2">정성 어린 마음 전해주시는 분들께 안내드립니다.</p>
          <p className="mb-2">
            아래 계좌로 마음을 전해주시면 감사히 받겠습니다.
          </p>
          <p className="mb-2">축하해 주셔서 진심으로 감사드립니다.</p>
        </div>
        <div className="mb-13 mt-12">
          <h2 className="text-[18px] text-[#4D2511] font-bold mb-2 ">
            신랑측 계좌번호
          </h2>
          <div className="table w-full">
            {manAccounts.map((account, index) => (
              <div className="table-row" key={index}>
                <div className="table-cell p-1 align-middle font-bold">
                  {account.name}
                </div>
                <div className="table-cell p-1 align-middle">
                  {account.bank.replace("은행", "")} {account.account}
                </div>
                <div className="table-cell p-1 align-middle">
                  <button
                    className="bg-parking px-3 py-1 rounded text-sm"
                    value={`${account.bank} ${account.account}`}
                    onClick={handleClick}
                  >
                    복사
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-[18px] text-[#4D2511] font-bold mb-2">
            신부측 계좌번호
          </h2>
          <div className="table w-full">
            {womanAccounts.map((account, index) => (
              <div className="table-row" key={index}>
                <div className="table-cell p-1 align-middle font-bold">
                  {account.name}
                </div>
                <div className="table-cell p-1 align-middle">
                  {account.bank.replace("은행", "")} {account.account}
                </div>
                <div className="table-cell p-1 align-middle">
                  <button
                    className="bg-parking px-3 py-1 rounded text-sm"
                    value={`${account.bank} ${account.account}`}
                    onClick={handleClick}
                  >
                    복사
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
