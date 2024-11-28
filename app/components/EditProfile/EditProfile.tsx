"use client";
import { Profile } from "@/app/types";
import {
  Button,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from "@mui/material";
import React from "react";
import styles from "../ViewProfile/styles.module.scss";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { useCookies } from "react-cookie";
import { DateField } from "@mui/x-date-pickers/DateField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

dayjs.extend(advancedFormat);

type Props = {
  profile: Profile;
  setIsEditing: (isEditing: boolean) => void;
};

const EditProfile = ({ profile, setIsEditing }: Props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["profile"]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setCookie("profile", {
      updatedAt: new Date().toISOString(),
      ...Object.fromEntries(formData),
    });
    setIsEditing(false);
  };

  return (
    <div className={styles.profileView}>
      <form onSubmit={onSubmit}>
        <Stack gap={2}>
          <Stack direction="row" gap={2}>
            <FormControl>
              <label>
                First Name <span>*</span>
              </label>
              <OutlinedInput
                required
                size="small"
                name="firstName"
                defaultValue={profile.firstName}
              />
            </FormControl>
            <FormControl>
              <label>
                Last Name <span>*</span>
              </label>
              <OutlinedInput
                required
                size="small"
                name="lastName"
                defaultValue={profile.lastName}
              />
            </FormControl>
          </Stack>

          <Stack direction="row" gap={2}>
            <FormControl>
              <label>
                Birth Date <span>*</span>
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateField
                  defaultValue={dayjs(profile.birthdate)}
                  name="birthdate"
                  size="small"
                  required
                />
              </LocalizationProvider>
            </FormControl>

            {/* spacer */}
            <FormControl />
          </Stack>

          <Stack direction="row" gap={2}>
            <FormControl>
              <label>City</label>
              <OutlinedInput
                size="small"
                name="city"
                defaultValue={profile.city}
              />
            </FormControl>

            <FormControl className="statePicker">
              <label>State</label>
              <Select size="small" name="state" defaultValue={profile.state}>
                <MenuItem value="AL">AL</MenuItem>
                <MenuItem value="AK">AK</MenuItem>
                <MenuItem value="AS">AS</MenuItem>
                <MenuItem value="AZ">AZ</MenuItem>
                <MenuItem value="AR">AR</MenuItem>
                <MenuItem value="CA">CA</MenuItem>
                <MenuItem value="CO">CO</MenuItem>
                <MenuItem value="CT">CT</MenuItem>
                <MenuItem value="DE">DE</MenuItem>
                <MenuItem value="DC">DC</MenuItem>
                <MenuItem value="FM">FM</MenuItem>
                <MenuItem value="FL">FL</MenuItem>
                <MenuItem value="GA">GA</MenuItem>
                <MenuItem value="GU">GU</MenuItem>
                <MenuItem value="HI">HI</MenuItem>
                <MenuItem value="ID">ID</MenuItem>
                <MenuItem value="IL">IL</MenuItem>
                <MenuItem value="IN">IN</MenuItem>
                <MenuItem value="IA">IA</MenuItem>
                <MenuItem value="KS">KS</MenuItem>
                <MenuItem value="KY">KY</MenuItem>
                <MenuItem value="LA">LA</MenuItem>
                <MenuItem value="ME">ME</MenuItem>
                <MenuItem value="MH">MH</MenuItem>
                <MenuItem value="MD">MD</MenuItem>
                <MenuItem value="MA">MA</MenuItem>
                <MenuItem value="MI">MI</MenuItem>
                <MenuItem value="MN">MN</MenuItem>
                <MenuItem value="MS">MS</MenuItem>
                <MenuItem value="MO">MO</MenuItem>
                <MenuItem value="MT">MT</MenuItem>
                <MenuItem value="NE">NE</MenuItem>
                <MenuItem value="NV">NV</MenuItem>
                <MenuItem value="NH">NH</MenuItem>
                <MenuItem value="NJ">NJ</MenuItem>
                <MenuItem value="NM">NM</MenuItem>
                <MenuItem value="NY">NY</MenuItem>
                <MenuItem value="NC">NC</MenuItem>
                <MenuItem value="ND">ND</MenuItem>
                <MenuItem value="MP">MP</MenuItem>
                <MenuItem value="OH">OH</MenuItem>
                <MenuItem value="OK">OK</MenuItem>
                <MenuItem value="OR">OR</MenuItem>
                <MenuItem value="PW">PW</MenuItem>
                <MenuItem value="PA">PA</MenuItem>
                <MenuItem value="PR">PR</MenuItem>
                <MenuItem value="RI">RI</MenuItem>
                <MenuItem value="SC">SC</MenuItem>
                <MenuItem value="SD">SD</MenuItem>
                <MenuItem value="TN">TN</MenuItem>
                <MenuItem value="TX">TX</MenuItem>
                <MenuItem value="UT">UT</MenuItem>
                <MenuItem value="VT">VT</MenuItem>
                <MenuItem value="VI">VI</MenuItem>
                <MenuItem value="VA">VA</MenuItem>
                <MenuItem value="WA">WA</MenuItem>
                <MenuItem value="WV">WV</MenuItem>
                <MenuItem value="WI">WI</MenuItem>
                <MenuItem value="WY">WY</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <FormControl>
            <label>Favorite Disney Character</label>
            <OutlinedInput
              size="small"
              name="favoriteCharacter"
              defaultValue={profile.favoriteCharacter}
            />
          </FormControl>

          <FormControl>
            <label>Favorite Disney movie</label>
            <OutlinedInput
              size="small"
              name="favoriteMovie"
              defaultValue={profile.favoriteMovie}
            />
          </FormControl>

          <FormControl>
            <label>Favorite ride</label>
            <OutlinedInput
              size="small"
              name="favoriteRide"
              defaultValue={profile.favoriteRide}
            />
          </FormControl>

          <Stack direction="row" gap={2}>
            <FormControl>
              <label>Favorite Disneyland</label>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="favoriteDisneyland"
                defaultValue={profile.favoriteDisneyland}
              >
                <MenuItem value="Dinseyland California">
                  Dinseyland California
                </MenuItem>
                <MenuItem value="Disneyland Paris">Disneyland Paris</MenuItem>
                <MenuItem value="Disneyland Tokyo">Disneyland Tokyo</MenuItem>
                <MenuItem value="Disneyworld Florida">
                  Disneyworld Florida
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl />
          </Stack>
        </Stack>

        <Stack direction="row" gap={2}>
          <Button
            size="large"
            color="secondary"
            variant="contained"
            type="submit"
          >
            Update Profile
          </Button>

          <Button
            size="large"
            color="secondary"
            variant="outlined"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default EditProfile;
