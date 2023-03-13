import json

import requests
from bs4 import BeautifulSoup



def main():
	res = requests.get("https://tailwindcss.com/docs/customizing-colors")
	soup = BeautifulSoup(res.text, "lxml")

	content_wrapper = soup.find("div", id="content-wrapper")
	grid = content_wrapper.find("div", class_="grid")

	number_of_shades = 0
	colors = []
	for div in grid.children:
		color_name = div.find("div", class_="font-semibold").text.strip()

		color = {}
		color["title"] = color_name
		color["name"] = color_name.lower()
		color["shades"] = []

		for shade_div in div.find("div", class_="grid").children:
			shade = {}
			shade["shade"] = shade_div.find("div", class_="font-medium").text.strip()
			shade["hex"] = shade_div.find("div", class_="font-mono").text.strip()
			color["shades"].append(shade)
			number_of_shades += 1

		colors.append(color)
		# break

	jo = {}
	jo["colors"] = colors

	output_json_filepath = "colors.json"
	with open(output_json_filepath, "w") as f:
		json.dump(jo, f, indent="\t")
		print(f"saved: ({output_json_filepath}) [{len(colors)} colors, {number_of_shades} shades]")


if __name__ == '__main__':
	main()
