---
layout: basic
title: Bogor COVID Case Reporting Form
date: 2021-02-09
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
  - type: radio
    label: Severity
    id: severity
    required: true
    enum:
      - Asymptomatic
      - Low
      - Medium
      - High
  - type: checklist
    label: Symptom
    checklist:
      - label: Cough
        id: cough
        required: false
      - label: Fever
        id: fever
        required: false
  - type: textarea
    label: Remarks
    id: remarks
    required: false
    placeholder: Patient is ...
---

> This form is for demo purpose only.
> Form submission will try to send result to imaginary WhatsApp number +62 1234 5678

The most common symptoms of COVID-19 are

- Fever
- Dry cough
- Fatigue

People of all ages who experience fever and/or cough associated with difficulty breathing or shortness of breath, chest pain or pressure, or loss of speech or movement should seek medical care immediately. If possible, call your health care provider, hotline or health facility first, so you can be directed to the right clinic.
