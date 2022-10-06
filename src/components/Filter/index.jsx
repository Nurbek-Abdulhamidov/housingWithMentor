import "antd/dist/antd.css";
import { Dropdown } from "antd";
import React, { useRef, useState } from "react";
import { Button, Input } from "../Generic";
import { Container, Icons, MenuWrapper, Section, SelectAnt } from "./style";
import { uzeReplace } from "../../hooks/useReplace";
import { useNavigate, useLocation } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import { useEffect } from "react";

const Filter = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("Select Category");

  const { REACT_APP_BASE_URL: url } = process.env;
  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, []);

  useEffect(() => {
    let [d] = data?.filter(
      (ctg) => ctg.id === Number(query.get("category_id"))
    );
    d?.name && setValue(d?.name);
    query.get("category_id") && setValue("Select Category");
  }, [location?.search, data]);

  const onChangeCategory = (category_id) => {
    navigate(`/properties${uzeReplace("category_id", category_id)}`);
  };
  const onChangeSort = (sort) => {
    navigate(`/properties${uzeReplace("sort", sort)}`);
  };
  const menu = (
    <MenuWrapper>
      <h2 className="subTitle">Address</h2>
      <Section>
        <Input
          onChange={onChange}
          defaultValue={query.get("country")}
          name="country"
          ref={countryRef}
          placeholder="Country"
        />
        <Input
          onChange={onChange}
          defaultValue={query.get("region")}
          name="region"
          ref={regionRef}
          placeholder="Region"
        />
        <Input
          onChange={onChange}
          defaultValue={query.get("city")}
          name="address"
          ref={cityRef}
          placeholder="City"
        />
        <Input
          onChange={onChange}
          defaultValue={query.get("zip_code")}
          name="zip_code"
          ref={zipRef}
          placeholder="Zip code"
        />
      </Section>
      <h2 className="subTitle">Apartment Info</h2>
      <Section>
        <Input
          name="room"
          onChange={onChange}
          ref={roomsRef}
          placeholder="Rooms"
        />
        <SelectAnt
          defaultValue={query.get("sort ") || "Select Sort"}
          onChange={onChangeSort}
        >
          <SelectAnt.Option value={""}>Select Sort</SelectAnt.Option>
          <SelectAnt.Option value={"asc"}>O'suvchi</SelectAnt.Option>
          <SelectAnt.Option value={"desc"}>Kamayuvchi</SelectAnt.Option>
        </SelectAnt>
        <SelectAnt defaultValue={value} onChange={onChangeCategory}>
          <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>
          {data.map((value, index) => (
            <SelectAnt.Option key={index} value={value?.id}>
              {value?.name}
            </SelectAnt.Option>
          ))}
        </SelectAnt>
      </Section>
      <h2 className="subTitle">Price</h2>
      <Section>
        <Input
          name="min_price"
          onChange={onChange}
          ref={minPriceRef}
          placeholder="Min price"
        />
        <Input
          name="max_price"
          onChange={onChange}
          ref={maxPriceRef}
          placeholder="Max price"
        />
      </Section>
    </MenuWrapper>
  );
  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder="Enter an address, neighborhood, city, or ZIP code"
      />
      <Dropdown
        overlay={menu}
        placement="bottomRight"
        arrow={{
          pointAtCenter: true,
        }}
        trigger="click"
      >
        <div>
          <Button type="light">
            <Icons.Setting /> Advanced
          </Button>
        </div>
      </Dropdown>
      <Button>
        <Icons.Search /> Search
      </Button>
    </Container>
  );
};

export default Filter;
