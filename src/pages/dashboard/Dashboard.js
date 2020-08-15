import React from "react";
import {
    Row,
    Col,
    Progress,
    Table,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Badge
} from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Widget from "../../components/Widget";
import Map from "./components/am4chartMap/am4chartMap";
import AnimateNumber from "react-animated-number";
import ReactEchartsCore from "echarts-for-react/lib/core";
import HighchartsReact from "highcharts-react-official";
import Sparklines from "../../components/Sparklines";
import ApexChart from "react-apexcharts";
import s from "./Charts.module.scss";
import { chartData, liveChart } from "./mock";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/themeRiver";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import Highcharts from "highcharts";
import exporting from "highcharts/modules/exporting";
import exportData from "highcharts/modules/export-data";
import config from "./config";
import "bootstrap/dist/css/bootstrap.min.css";
const colors = config.chartColors;

let columnColors = [
  colors.blue,
  colors.green,
  colors.orange,
  colors.red,
  colors.default,
  colors.gray,
  colors.teal,
  colors.pink,
];
exporting(Highcharts);
exportData(Highcharts);

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lgShow: false,
      dropdownOpen: false,
      graph: null,
      checkedArr: [false, false, false],
      cd: chartData,
      ld: liveChart,
      initEchartsOptions: { renderer: "canvas" },
      sparklineData: {
        series: [{ data: [1, 7, 3, 5, 7, 8] }],
        options1: {
          colors: ["#ffc247"],
          plotOptions: {
            bar: {
              columnWidth: "50%",
            },
          },
        },
        options2: {
          colors: ["#ffc0d9"],
          plotOptions: {
            bar: {
              columnWidth: "50%",
            },
          },
        },
      },
      hist_data: {
        column: {
          series: [
            {
              data: [],
            },
          ],
          options: {
            chart: {
              height: 350,
              type: "bar",
            },
            colors: columnColors,
            plotOptions: {
              bar: {
                columnWidth: "45%",
                distributed: true,
              },
            },
            dataLabels: {
              enabled: false,
            },
            xaxis: {
              categories: [],
              labels: {
                style: {
                  colors: columnColors,
                  fontSize: "14px",
                },
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
            },
            yaxis: {
              labels: {
                style: {
                  color: colors.textColor,
                },
              },
            },
            tooltip: {
              theme: "dark",
            },
            grid: {
              borderColor: colors.gridLineColor,
            },
          },
        },
      },
      donut: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          show: false,
        },
        color: [
          colors.blue,
          colors.green,
          colors.orange,
          colors.red,
          colors.purple,
        ],
        series: [
          {
            name: "Connection Type",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center",
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold",
                },
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              { value: 335, name: "Direct interview" },
              { value: 310, name: "Email marketing" },
              { value: 234, name: "Alliance advertising" },
              { value: 135, name: "Video ad" },
              { value: 1548, name: "Normal" },
            ],
          },
        ],
      },
              tableStyles: [
        {
          id: 1,
            ip: ' 185.40.67.59',
            mac: "DS:4A:R3:DD",
          size: '45.6 KB',
          connection_type: "Threat",
            blocked: true
        },
        {
          id: 2,
     ip: '185.40.67.12',
          mac: "DE:DG:73:A5:74",
          size: '15.3 MB',
            connection_type: "Normal",
            blocked: false

        },
        {
          id: 3,
     ip: '192.141.28.11',
          label: {
            colorClass: 'danger',
            text: 'Blacklisted!',
          },
          mac: "e5:ab:cd:fr:00" ,
          size: '49.0 KB',
          connection_type: "Threat",
            blocked: true

        },
        {
          id: 4,
            ip: '79.97.106.65',
            mac: "22:eb:34:h2:f9",
            size: '69.1 KB',
            connection_type: "Normal",
            blocked: false

        },
        {
          id: 5,
     ip: '52.31.51.10',
          mac: "2A:CD:5B:1A",
          size: '2.3 MB',
          connection_type: "Normal",
            blocked: false

        },
      ],
    };
  }

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };
  setLgShow = () => {
    this.setState({ lgShow: !this.state.lgShow });
  };

  componentDidMount() {
    this.connectionDistribution();
  }

  connectionDistribution() {
    let pie_data = [
      {
        name: "Connection Type",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: "center",
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: "30",
              fontWeight: "bold",
            },
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          { value: 23, name: "ipsweep" },
          { value: 120, name: "satan" },
          { value: 20, name: "multihop" },
          { value: 404, name: "ftp_write" },
          { value: 320, name: "warezclient" },
          { value: 20, name: "phf" },
          { value: 28, name: "back" },
          { value: 25, name: "land" },
          { value: 320, name: "teardrop" },
          { value: 30, name: "pod" },
          { value: 20, name: "portsweep" },
          { value: 20, name: "imap" },
          { value: 21, name: "rootkit" },
          { value: 20, name: "normal" },
          { value: 10, name: "guess_passwd" },
          { value: 20, name: "smurf" },
          { value: 53, name: "loadmodule" },
          { value: 20, name: "nmap" },
          { value: 23, name: "warezmaster" },
          { value: 27, name: "spy" },
          { value: 20, name: "perl" },
          { value: 1020, name: "neptune" },
          { value: 420, name: "buffer_overflow" },
        ],
      },
    ];

    let connection_categories = [
      "ipsweep",
      "satan",
      "multihop",
      "ftp_write",
      "warezclient",
      "phf",
      "back",
      "land",
      "teardrop",
      "pod",
      "portsweep",
      "imap",
      "rootkit",
      "normal",
      "guess_passwd",
      "smurf",
      "loadmodule",
      "nmap",
      "warezmaster",
      "spy",
      "perl",
      "neptune",
      "buffer_overflow",
    ];
    let data = {
      data: [
        23,
        120,
        20,
        404,
        320,
        20,
        28,
        25,
        320,
        30,
        20,
        20,
        21,
        20,
        10,
        20,
        53,
        20,
        23,
        27,
        20,
        1020,
        420,
      ],
    };
    this.setState((prevState) => ({
      ...prevState,
      hist_data: {
        ...prevState.hist_data,
        column: {
          ...prevState.hist_data.column,
          series: [data],
        },
      },
    }));
    //Map

    this.setState((prevState) => ({
      ...prevState,
      hist_data: {
        ...prevState.hist_data,
        column: {
          ...prevState.hist_data.column,
          options: {
            ...prevState.hist_data.column.options,
            xaxis: {
              ...prevState.hist_data.column.options.xaxis,
              categories: connection_categories,
            },
          },
        },
      },
    }));

    // dount.series
    this.setState((prevState) => ({
      ...prevState,
      donut: {
        ...prevState.donut,
        series: pie_data,
      },
    }));
  }



  checkAll(ev, checkbox) {
    const checkboxArr = (new Array(this.state[checkbox].length)).fill(ev.target.checked);
    this.setState({
      [checkbox]: checkboxArr,
    });
  }

  changeCheck(ev, checkbox, id) {
    //eslint-disable-next-line
    this.state[checkbox][id] = ev.target.checked;
    if (!ev.target.checked) {
      //eslint-disable-next-line
      this.state[checkbox][0] = false;
    }
    this.setState({
      [checkbox]: this.state[checkbox],
    });
  }

  selectClientAction =(id, itemAttributes)=> {
  let index = this.state.tableStyles.findIndex(x=> x.id === id);
  if (index === -1){
       // handle error
  }
  else{
          this.setState({
      tableStyles: [
         ...this.state.tableStyles.slice(0,index),
         Object.assign({}, this.state.tableStyles[index], itemAttributes),
         ...this.state.tableStyles.slice(index+1)
      ]
    });
  }

};


  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">
          SIEM-Dashboard
          <small>
            <small></small>
          </small>
        </h1>

        <Row>
          <Col lg={7}>
            <Widget className="bg-transparent">
              <Map />
            </Widget>
          </Col>
          <Col lg={1} />

          <Col lg={4}>
            <Widget
              className="bg-transparent"
              title={
                <h5>
                  {" "}
                  Threat
                  <span className="fw-semi-bold">&nbsp;Statistics</span>
                </h5>
              }
              settings
              refresh
              close
            >
              <p>
                Status: <strong>Live</strong>
              </p>
              <div className="row progress-stats">
                <div className="col-md-9 col-12">
                  <h6 className="name fw-semi-bold">
                    Network Protocols Distribution{" "}
                  </h6>
                  <p className="description deemphasize mb-xs text-white">
                    HTTP / HTTPS
                  </p>
                  <Progress
                    color="primary"
                    value="60"
                    className="bg-custom-dark progress-xs"
                  />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small>
                      <AnimateNumber value={75} />%
                    </small>
                  </span>
                </div>
              </div>
              <div className="row progress-stats">
                <div className="col-md-9 col-12">
                  <p className="description deemphasize mb-xs text-white">
                    TCP
                  </p>
                  <Progress
                    color="danger"
                    value="39"
                    className="bg-custom-dark progress-xs"
                  />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small>
                      <AnimateNumber value={84} />%
                    </small>
                  </span>
                </div>
              </div>
              <div className="row progress-stats">
                <div className="col-md-9 col-12">
                  <p className="description deemphasize mb-xs text-white">
                    ICMP
                  </p>
                  <Progress
                    color="success"
                    value="80"
                    className="bg-custom-dark progress-xs"
                  />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small>
                      <AnimateNumber value={92} />%
                    </small>
                  </span>
                </div>
              </div>
              <h6 className="fw-semi-bold mt">Intrusion Detection</h6>
              <p>
                Threat Hunt: <strong>Active</strong>
              </p>
              <p>
                <span className="circle bg-default text-white">
                  <i className="fa fa-cog" />
                </span>
                &nbsp; 391 scanned , 84 blockeds
              </p>
              Take Action
              <div className="input-group mt">
                <Button color="primary" onClick={this.setLgShow}>
                  View Connected Clients
                </Button>
                <Modal
                  size="lg"
                  isOpen={this.state.lgShow}
                  toggle={this.setLgShow}
                >
                  <ModalHeader toggle={true}>Connected Clients</ModalHeader>
                  <ModalBody className="bg-light-blue">
                    <Widget
                      title={
                        <h5>
                          Table <span className="fw-semi-bold">Styles</span>
                        </h5>
                      }
                      settings
                      close
                      bodyClass={s.mainTableWidget}
                    >
                      <Table striped>
                        <thead>
                          <tr className="fs-sm">
                            <th className="hidden-sm-down">#</th>
                            <th>Client IP Address</th>
                            <th className="hidden-sm-down">MAC Address</th>
                            <th className="hidden-sm-down">Packet Size</th>
                            <th className="hidden-sm-down">Connection Type</th>
                            <th className="hidden-sm-down">Status</th>
                            <th className="hidden-sm-down">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.tableStyles.map((row) => (
                            <tr key={row.id}>
                              <td>{row.id}</td>
                              <td>
                                {row.ip}
                              </td>
                                <td className="text-muted">
                                  {row.mac}
                                  {row.label && (
                                  <div>
                                    <Badge color={row.label.colorClass}>
                                      {row.label.text}
                                    </Badge>
                                  </div>
                                )}
                              </td>

                              <td className="text-muted">
                                  {row.size}
                              </td>
                              <td className="text-muted">
                                  <Badge color={(row.connection_type==="Threat")? "warning":"primary"} className="text-gray-dark">{row.connection_type}</Badge>
                              </td>
                              <td className="text-muted">
                                  <Badge color={(row.blocked===true)? "danger":"secondary"}>{(row.blocked===true)? "Blocked":"Allowed"}</Badge>
                              </td>
                                <td className="width-150">
                                    <UncontrolledButtonDropdown>
                            <DropdownToggle
                              color="inverse"
                              className="mr-xs"
                              size="sm"
                              caret
                            >
                              Action
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem onClick={this.selectClientAction.bind(this,row.id, {blocked: true})}>Block</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem onClick={this.selectClientAction.bind(this,row.id, {blocked: false})}>Unblock</DropdownItem>
                            </DropdownMenu>
                          </UncontrolledButtonDropdown>

                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Widget>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.setLgShow}>
                      Close
                    </Button>
                    <Button color="primary">Save changes</Button>
                  </ModalFooter>
                </Modal>
              </div>
            </Widget>
          </Col>
        </Row>
        <Row>
          <div>
            <Row>
              <Col lg={7} xs={12}>
                <Widget
                  title={
                    <h5>
                      Connection Type{" "}
                      <span className="fw-semi-bold">Distribution Chart</span>
                    </h5>
                  }
                  close
                  collapse
                >
                  <ApexChart
                    className="sparkline-chart"
                    height={350}
                    series={this.state.hist_data.column.series}
                    options={this.state.hist_data.column.options}
                    type={"bar"}
                  />
                </Widget>
              </Col>
              <Col lg={5} xs={12}>
                <Widget
                  title={
                    <h5>
                      Chart <span className="fw-semi-bold">Donut Chart</span>
                    </h5>
                  }
                  close
                  collapse
                >
                  <ReactEchartsCore
                    echarts={echarts}
                    option={this.state.donut}
                    opts={this.state.initEchartsOptions}
                    style={{ height: "365px" }}
                  />
                </Widget>
              </Col>
              <Col>
                <Widget
                  title={
                    <h5>
                      Highcharts{" "}
                      <span className="fw-semi-bold">Line Chart</span>
                    </h5>
                  }
                  close
                  collapse
                >
                  <HighchartsReact options={this.state.cd.highcharts.mixed} />
                  <h5 className="mt">
                    Interactive <span className="fw-semi-bold">Sparklines</span>
                  </h5>
                  <Row>
                    <Col md={6} xs={12}>
                      <div className="stats-row">
                        <div className="stat-item">
                          <p className="value5 fw-thin">34 567</p>
                          <h6 className="name text-muted m0 fs-mini">
                            Overall Values
                          </h6>
                        </div>
                        <div className="stat-item stat-item-mini-chart">
                          <Sparklines
                            options={this.state.sparklineData.options2}
                            width={80}
                            height={25}
                            data={this.state.sparklineData.series}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col md={6} xs={12}>
                      <div className="stats-row">
                        <div className="stat-item">
                          <p className="value5 fw-thin">34 567</p>
                          <h6 className="name text-muted m0 fs-mini">
                            Overall Values
                          </h6>
                        </div>
                        <div className="stat-item stat-item-mini-chart">
                          <Sparklines
                            options={this.state.sparklineData.options1}
                            width={80}
                            height={25}
                            data={this.state.sparklineData.series}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Widget>
              </Col>
              <Col lg={12} xs={12}>
                <Widget
                  title={
                    <h5>
                      Echarts <span className="fw-semi-bold">River Chart</span>
                    </h5>
                  }
                  close
                  collapse
                >
                  <ReactEchartsCore
                    echarts={echarts}
                    option={this.state.cd.echarts.river}
                    opts={this.state.initEchartsOptions}
                    style={{ height: "350px" }}
                  />
                </Widget>
              </Col>
              <Col>
                <Row>
                  <Col lg={12} xs={12}>
                    <Widget
                      title={
                        <h5>
                          Highcharts{" "}
                          <span className="fw-semi-bold">Live Chart</span>
                        </h5>
                      }
                      close
                      collapse
                    >
                      <HighchartsReact options={this.state.ld} />
                    </Widget>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
