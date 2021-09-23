/* eslint-disable no-console */
import { existsSync, readFileSync, writeFileSync } from "fs";
// eslint-disable-next-line import/extensions
import { defaultPanelOptions } from "../panelOptions.config.js";

const INDENT = 2;

const IN_PATHS = {
  css: "dist/bundle.css",
  onRender: "dist/onRender.js",
  onInit: "dist/onInit.js",
  codeData: "dist/custom-properties.json",
};

const OUT_PATH = "dist/panel-options.json";

const panelOptions = defaultPanelOptions;

function exportPanelOptions() {
  // Read in files
  for (const [key, path] of Object.entries(IN_PATHS)) {
    if (existsSync(path)) {
      panelOptions[key] = readFileSync(path, "utf8");
    } else {
      console.warn(`${path} does not exist, using default values.`);
    }
  }

  // Write out file
  writeFileSync(
    OUT_PATH,
    `${JSON.stringify(panelOptions, undefined, INDENT)}\n`
  );
  console.log(`Successfully written ${OUT_PATH}`);
}

exportPanelOptions();
/* eslint-enable no-console */
