import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";
import replace from '@rollup/plugin-replace';

const banner = `/*!
* ${pkg.name} - v${pkg.version}
* ${pkg.description}
* ${pkg.homepage}
*
* Made by ${pkg.author}
* Under ${pkg.license} License
*/`;

const production = !process.env.ROLLUP_WATCH;

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: "dist/mymenujs.esm.js",
				banner,
				format: "esm",
				sourcemap: true
			}
		],
		plugins: [
			typescript({
				typescript: require("typescript")
			}),
			replace({
				'process.env.NODE_ENV': JSON.stringify('production'),
				__buildDate__: () => JSON.stringify(new Date()),
				__buildVersion: 15
			}),
			resolve(),
			commonjs()
		],
		external: [
			"tslib"
		]
	},
	{
		input: "src/index.ts",
		output: [
			{
				name: "MyMenu",
				file: production ? pkg.main : 'docs/assets/js/mymenujs.js',
				banner,
				format: "umd",
				sourcemap: true
			}
		],
		plugins: [
			typescript({
				typescript: require("typescript")
			}),
			replace({
				'process.env.NODE_ENV': JSON.stringify('production'),
				__buildDate__: () => JSON.stringify(new Date()),
				__buildVersion: 15
			}),
			resolve(),
			commonjs()
		]
	},
];
