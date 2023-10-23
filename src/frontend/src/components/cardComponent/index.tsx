import { cardComponentPropsType } from "../../types/components";
import { gradients } from "../../utils/styleUtils";
import IconComponent from "../genericIconComponent";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const CardComponent = ({
  isFlow,
  data,
  id,
  onDelete,
  button,
}: cardComponentPropsType): JSX.Element => {
  return (
    <Card className="group">
      <CardHeader>
        <CardTitle className="card-component-title-display">
          <span
            className={
              "card-component-image " +
              gradients[parseInt(data.id.slice(0, 12), 16) % gradients.length]
            }
          ></span>
          <span className="card-component-title-size">{data.name}</span>
          {onDelete && (
            <button className="card-component-delete-button" onClick={onDelete}>
              <IconComponent
                name="Trash2"
                className="card-component-delete-icon"
              />
            </button>
          )}
        </CardTitle>
        <CardDescription className="card-component-desc">
          <div className="card-component-desc-text">
            {data.description}
            {/* {flow.description} */}
          </div>
        </CardDescription>
      </CardHeader>

      {isFlow && (
        <CardFooter>
          <div className="card-component-footer-arrangement">
            <div className="card-component-footer"></div>
            {button && button}
          </div>
        </CardFooter>
      )}
    </Card>
  );
};
