import openpyxl
import pprint

wb = openpyxl.load_workbook('Sample.xlsx')

sheet = wb['Sheet1']
cell = sheet['E2']
print(cell.value)