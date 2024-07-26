import { FinancialModel } from "@api/financial/model";
import { DownloadButton } from "@components/Button";
import ImagePreview from "@components/ImagePreview";
import Popover from "@components/Popover";
import { Info } from "@mui/icons-material";
import { rupiahFormatter } from "@utils/stringParser";

interface Props {
  currentFinreq: FinancialModel;
}
const FinancialDetailsContent = (props: Props) => {
  const { currentFinreq } = props;

  console.log(currentFinreq.payment.evidence);

  const labelClass =
    "text-xs border-b text-gray-200/80 border-gray-200/60 opacity-90";

  return (
    <div className="flex flex-col gap-2">
      <div className="pe-1 flex gap-2 items-baseline">
        <span className="text-xl w-fit ">{currentFinreq.request_id}</span>
        <span className="text-sm">({currentFinreq.payment.status.name})</span>
      </div>
      <div className="flex gap-8">
        <div>
          <span className={labelClass}>Amount</span>
          <div className="-mt-1">
            <span>{rupiahFormatter(currentFinreq.amount)}</span>
          </div>
        </div>
        <div>
          <span className={labelClass}>Payment</span>
          <div className="-mt-1 flex gap-1 items-center">
            <span>{currentFinreq.payment.type.name}</span>
            <Popover
              position="topLeft"
              transform="bottomLeft"
              buttonComponent={
                <Info
                  sx={{ fontSize: "0.8rem", color: "gray" }}
                  className="cursor-pointer"
                />
              }
            >
              <div className="text-sm p-2 px-3">
                <div>
                  <span className={labelClass}>Provider</span>
                  <div>{currentFinreq.payment.target_provider}</div>
                </div>
                <div>
                  <span className={labelClass}>Name</span>
                  <div>{currentFinreq.payment.target_name}</div>
                </div>
                <div>
                  <span className={labelClass}>Number</span>
                  <div>{currentFinreq.payment.target_number}</div>
                </div>
              </div>
            </Popover>
          </div>
        </div>
      </div>
      <div>
        <span className={labelClass}>Note</span>
        <div className="text-sm">{currentFinreq.note}</div>
      </div>
      <div>
        <span className={labelClass}>Requester</span>
        <div className="text-sm flex gap-1 items-center">
          <span>{currentFinreq.user.name}</span>
          <Popover
            position="topLeft"
            transform="bottomLeft"
            buttonComponent={
              <Info
                sx={{ fontSize: "0.8rem", color: "gray" }}
                className="cursor-pointer"
              />
            }
          >
            <div className="text-sm p-2 px-3">
              <div>
                <span className={labelClass}>NPM</span>
                <div>{currentFinreq.user.npm}</div>
              </div>
              <div>
                <span className={labelClass}>Email</span>
                <div>{currentFinreq.user.email}</div>
              </div>
            </div>
          </Popover>
        </div>
      </div>
      <div>
        <div className="flex gap-1 items-center">
          <span className={labelClass}>Evidence</span>
          <DownloadButton
            className="mt-0.5"
            url={currentFinreq.payment.evidence}
          />
        </div>
        <div className="text-sm">
          <ImagePreview imageUrl={currentFinreq.payment.evidence} />
        </div>
      </div>
    </div>
  );
};

export default FinancialDetailsContent;
