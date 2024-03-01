import React, { useState } from "react";
import { Button, Checkbox, Form, Radio, ConfigProvider, Switch } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import type { GetProp } from "antd";
import { Space } from "antd";

const onFinish = (values: any) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  firstname?: string;
  proficiency?: string;
  tool?: string;
};

const InputFormComponent: React.FC = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);

  const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    console.log("checked = ", checkedValues);
  };

  return (
    <div className="rounded-lg shadow-md w-1/8 ">
      <div className="ml-3 mt-4">
        <div className="mb-3">
          <span className="text-md font-light ">Editable</span>
          <ConfigProvider
            theme={{
              components: {
                Switch: {
                  handleBg: componentDisabled ? "white" : "#7c3aed",
                  colorPrimary: "#7c3aed",
                  colorPrimaryHover: "#7c3aed",
                },
              },
            }}
          >
            <Switch
              className="shadow-inner shadow-violet-600 float-right mr-6"
              checked={componentDisabled}
              onChange={(e) => setComponentDisabled(e)}
            />
          </ConfigProvider>
        </div>
        <div className="flow-root font-medium">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#7c3aed",
                colorPrimaryHover: "#7c3aed",
                controlInteractiveSize: 0,
              },
              components: {
                Radio: {
                  radioSize: 11,
                },
                Button: {
                  contentFontSizeLG: 40,
                },
              },
            }}
          >
            <Form
              labelCol={{ span: 16 }}
              labelAlign="left"
              labelWrap={true}
              wrapperCol={{ span: 14 }}
              layout="vertical"
              disabled={!componentDisabled}
              style={{ left: 0, maxWidth: 800 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType> name="firstname" className="relative">
                <input
                  type="text"
                  id="first_name"
                  disabled={!componentDisabled}
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-3 w-11/12 h-1/2 text-sm text-gray-900 border border-slate-300 rounded-md hover:enabled:ring-1 hover:enabled:ring-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="first_name"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  First Name
                </label>
              </Form.Item>
              <Form.Item<FieldType>
                name="proficiency"
                label="Are you proficient in ReactJS development?"
              >
                <Radio.Group>
                  <Space direction="vertical">
                    <Radio className="mt-1 font-light" value="No">
                      {" "}
                      No{" "}
                    </Radio>
                    <Radio className="mt-1 font-light" value="Yes">
                      {" "}
                      Yes{" "}
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
              <Form.Item<FieldType> name="tool" label="Which tools do you use?">
                <Form.Item help="Please select all that apply."></Form.Item>
                <Checkbox.Group onChange={onChange}>
                  <Space direction="vertical">
                    <Checkbox className="mt-1 font-light" value="Redux">
                      Redux
                    </Checkbox>
                    <Checkbox className="mt-1 font-light" value="Lodash">
                      Lodash
                    </Checkbox>
                    <Checkbox className="mt-1 font-light" value="Ant design">
                      Ant design
                    </Checkbox>
                    <Checkbox className="mt-1 font-light" value="Webpack">
                      Webpack
                    </Checkbox>
                    <Checkbox className="mt-1 font-light" value="Other">
                      Other
                    </Checkbox>
                  </Space>
                </Checkbox.Group>
              </Form.Item>
              <Form.Item>
                <Button
                  className="bg-violet-600 text-whitesize-md text-md disabled:bg-violet-300"
                  shape="round"
                  size="large"
                  htmlType="submit"
                >
                  Process
                </Button>
              </Form.Item>
            </Form>{" "}
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default InputFormComponent;
