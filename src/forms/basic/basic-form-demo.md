---
date: 2021-02-09
layout: basic
title: "Bogor COVID Case Reporting Form"
waNumber: 6212345678
form:
  - type: textfield
    label: Name
    id: name
    required: true
  - type: numberfield
    label: Age
    id: age
    required: true
  - type: selectfield
    label: Area
    id: area
    required: true
    enum:
      - Bogor Barat
      - Bogor Tengah
      - Bogor Timur
      - Bogor Utara
      - Bogor Selatan
      - Tanah Sareal
  - type: selectfield
    label: Severity
    id: severity
    required: true
    enum:
      - Asimptomatic
      - Low
      - Medium
      - High
  - type: textarea
    label: Remarks
    id: remarks
    required: false
---

> This form is for demo purpose only.
> Form submission will try to send result to imaginary WhatsApp number +62 1234 5678

[Actual Covid Case Report Form](https://www.who.int/docs/default-source/coronaviruse/2019-covid-crf-v6.pdf?sfvrsn=c5ff90c6_2)