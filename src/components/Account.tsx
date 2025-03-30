import contact from "../assets/contact.png?url";

const Account = () => {
  return (
    <div className="min-h-screen flex items-start justify-center">
      <div className="bg-white w-full max-w-md p-6 ">
        <div className="mt-13 flex items-center justify-center">
          <img src={contact} className="title-contact" />
        </div>
        <div className="mb-13 mt-13">
          <h2 className="text-xl font-bold mb-4">신랑측 계좌번호</h2>
          <div className="table w-full">
            <div className="table-row">
              <div className="table-cell p-2 align-middle font-bold">
                서환수
              </div>
              <div className="table-cell p-2 align-middle">
                은행 0000-000-000000
              </div>
              <div className="table-cell p-2 align-middle">
                <button className="bg-parking px-3 py-1 rounded text-sm">
                  복사
                </button>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell p-2 align-middle font-bold">
                서만근
              </div>
              <div className="table-cell p-2 align-middle">
                은행 0000-000-000000
              </div>
              <div className="table-cell p-2 align-middle">
                <button className="bg-parking px-3 py-1 rounded text-sm">
                  복사
                </button>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell p-2 align-middle font-bold">
                유승주
              </div>
              <div className="table-cell p-2 align-middle">
                은행 0000-000-000000
              </div>
              <div className="table-cell p-2 align-middle">
                <button className="bg-parking px-3 py-1 rounded text-sm">
                  복사
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">신부측 계좌번호</h2>
          <div className="table w-full">
            <div className="table-row">
              <div className="table-cell p-2 align-middle font-bold">
                채예진
              </div>
              <div className="table-cell p-2 align-middle">
                은행 0000-000-000000
              </div>
              <div className="table-cell p-2 align-middle">
                <button className="bg-parking px-3 py-1 rounded text-sm">
                  복사
                </button>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell p-2 align-middle font-bold">
                채래문
              </div>
              <div className="table-cell p-2 align-middle">
                은행 0000-000-000000
              </div>
              <div className="table-cell p-2 align-middle">
                <button className="bg-parking px-3 py-1 rounded text-sm">
                  복사
                </button>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell p-2 align-middle font-bold">
                나희숙
              </div>
              <div className="table-cell p-2 align-middle">
                은행 0000-000-000000
              </div>
              <div className="table-cell p-2 align-middle">
                <button className="bg-parking px-3 py-1 rounded text-sm">
                  복사
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
