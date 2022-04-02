import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCities, loadFilter } from "../actions/filterAction";
import { loadState } from "../actions/filterAction";
import { categories_list } from "../data";
import Dropdown from "react-dropdown";
import Select from "react-select";
import Multiselect from "multiselect-react-dropdown";
// import {
//   CheckBoxSelection,
//   Inject,
//   MultiSelectComponent,
// } from "@syncfusion/ej2-react-dropdowns";
// import {
//   CheckBoxSelection,
//   Inject,
//   MultiSelectComponent,
// } from "react-dropdown";
import ScrollTop from "./ScrollTop";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const [stateId, setStateId] = useState("");
  const [categories, setCategories] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [skills, setSkills] = useState("");
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(99);
  const [minHeight, setMinHeight] = useState("");
  const [maxHeight, setMaxHeight] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCities(stateId));
    dispatch(loadState());
  }, [stateId, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      loadFilter(
        categories,
        role,
        gender,
        language,
        state,
        city,
        skills,
        minAge,
        maxAge,
        minHeight,
        maxHeight
      )
    );
    if (isLoading == false) {
      navigate("/search");
    }
  };

  const { states, languages, cities, filterDetails, isLoading } = useSelector(
    (state) => state.filter
  );

  console.log(states);
  return (
    <div className="first-slide">
      <div className="upcoming">
        <div className="filter-form">
          <h3>Search Filters</h3>
          <Multiselect
            displayValue="value"
            onKeyPressFn={function noRefCheck() {}}
            onRemove={function noRefCheck() {}}
            onSearch={function noRefCheck() {}}
            onSelect={function noRefCheck() {}}
            options={categories_list}
            placeholder="Categories"
            showCheckbox
          />
          <Multiselect
            displayValue="state_name"
            onKeyPressFn={function noRefCheck() {}}
            onRemove={function noRefCheck() {}}
            onSearch={function noRefCheck() {}}
            onSelect={function noRefCheck() {}}
            options={states}
            placeholder="State"
            showCheckbox
          />
          {/* <MultiSelectComponent
            id="checkbox"
            dataSource={categories_list}
            fields={categories_list}
            placeholder="Select game"
            mode="CheckBox"
          >
            <Inject services={[CheckBoxSelection]} />
          </MultiSelectComponent> */}
          {/* <div>
            <Select
              options={categories_list}
              onChange={this.handleChange.bind(this)}
              isMulti
            />
            {categories_list === null
              ? ""
              : categories_list.map((v) => <h4>{v.label}</h4>)}
          </div> */}
          {/* <Select options={categories_list} isMulti /> */}
          {/* <Dropdown
            options={categories_list}
            id="roles"
            name="Categories"
            // value={categories_list}
            placeholder="Select an option"
          /> */}
          
          <form onSubmit={submitHandler}>
            <div className="filters-fields">
              <div className="row">
                <div className="col-md-12">
                  <select
                    id="roles"
                    name="Categories"
                    onChange={(e) => setCategories(e.target.value)}
                  >
                    <option value="">Categories</option>
                    {categories_list.map((e) => (
                      <option value={e.value} name="dup">
                        {e.value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="filters-fields">
              <div className="row">
                <div className="col-md-12">
                  <select
                    id="roles"
                    name="role"
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="">Role</option>
                    <option name="dup">dup</option>
                    <option name="Lady getup">Lady getup</option>
                    <option name="gud">gud</option>
                    <option name="Insta fame">Insta fame</option>
                    <option name="Hero">Hero</option>
                    <option name="padding Hero">padding Hero</option>
                    <option name="Heroine">Heroine</option>
                    <option name="Padding Heroine">Padding Heroine</option>
                    <option name="padding artists">padding artists</option>
                    <option name="Foreigners">Foreigners</option>
                    <option name="Decent">Decent</option>
                    <option name="youtuber">youtuber</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="filters-fields">
              <div className="row">
                <div className="col-md-12">
                  <select
                    id="roles"
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Gender</option>
                    <option name="male">Male</option>
                    <option name="female">Female</option>
                    <option name="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="filters-fields">
              <div className="row">
                <div className="col-md-12">
                  {languages?.length > 0 ? (
                    <select
                      id="roles"
                      className="form-control"
                      onChange={(e) => setLanguage(e.target.value)}
                    >
                      <option value="">Languages</option>
                      {languages.map((e, i) => (
                        <option key={i} name="Telugu" value={e.language_name}>
                          {e.language_name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <select name="Languages">
                      <option value="">Languages</option>
                    </select>
                  )}
                </div>
              </div>
            </div>
            <div className="filters-fields">
              <div className="row">
                <div className="col-md-12">
                  <div className="age">
                    <div className="fromfield">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setMinAge(e.target.value)}
                        placeholder="From Age"
                      />
                    </div>
                    <div className="fromfield">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setMaxAge(e.target.value)}
                        placeholder="To Age"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="filters-fields">
              <div className="row">
                <div className="col-md-12">
                  <div className="age">
                    <div className="fromfield">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setMinHeight(e.target.value)}
                        placeholder="From Height"
                      />
                    </div>
                    <div className="fromfield">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setMaxHeight(e.target.value)}
                        placeholder="To Height"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="filters-fields">
              <div className="row">
                <div className="col-md-12">
                  {states?.length > 0 ? (
                    <select
                      id="roles"
                      className="form-control"
                      onChange={(e) => setStateId(e.target.value)}
                      name="country-state"
                    >
                      <option value="">Select State</option>
                      {states.map((e, i) => (
                        // console.log(e)
                        <option key={i} value={e.id}>
                          {e.state_name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <select name="country-state">
                      <option value="">Select State</option>
                    </select>
                  )}
                </div>
              </div>
            </div>
            <div className="filters-fields">
              <div className="row">
                <div className="col-md-12">
                  {cities?.length > 0 ? (
                    <select
                      id="roles"
                      name="city"
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option value="">City</option>
                      {cities.map((e, i) => (
                        <option key={i} value={e.city_name}>
                          {e.city_name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <select id="roles" name="city">
                      <option>City</option>
                    </select>
                  )}
                </div>
              </div>
            </div>
            <div className="filters-fields">
              <div className="row">
                <div className="col-md-12">
                  <select
                    id="roles"
                    name="role"
                    onChange={(e) => setSkills(e.target.value)}
                  >
                    <option value="">Skills</option>
                    <option name="Bike">Bike</option>
                    <option name="car">Car</option>
                    <option name="Swimming">Swimming</option>
                    <option name="horse riding">horse riding</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="filter-submit">
              <button type="submit" className="btn ">
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filter;
