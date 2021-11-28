import React, { useEffect, useState, useMemo } from "react";
import { Select, Spin, Empty } from "antd";
import debounce from "lodash/debounce";
import { doRequest } from "../../../helpers/doRequest";
import { REQUEST_TYPE } from "../../../constants";
import { fetchLocksURL } from "../../../helpers/urls";

function DebounceSelect({ fetchOptions, debounceTimeout = 800, ...props }) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    debounceFetcher("");
  }, []);
  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      setFetching(true);
      fetchOptions(value).then((newOptions) => {
        console.log("options ----", options);
        console.log("newOptions ----", newOptions);
        const updatedOptions = [...options, ...newOptions];
        console.log("updatedOptions ----", updatedOptions);
        setOptions(updatedOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      onSelect={() => debounceFetcher("")}
      suffixIcon={fetching ? <Spin size="small" /> : null}
      notFoundContent={<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      {...props}
      options={options}
    />
  );
} // Usage of DebounceSelect

async function fetchLockList(q) {
  console.log("fetching user", q);
  return doRequest({
    method: REQUEST_TYPE.GET,
    url: fetchLocksURL(10, q),
  }).then((response) => {
    console.log("response ----", response);
    return response.map((lock) => {
      const { id, name } = lock;
      return {
        label: `${name}`,
        value: id,
      };
    });
  });
}

const Demo = (props) => {
  console.log("props ----", props);
  return (
    <DebounceSelect
      {...props}
      mode="multiple"
      placeholder="Select Locks"
      fetchOptions={fetchLockList}
      // value={value}
      // onChange={(newValue) => setValue(newValue)}
      style={{
        width: "100%",
      }}
    />
  );
};

export default Demo;
