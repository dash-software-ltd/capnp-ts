import tap from "tap";
import * as capnp from "capnp-ts";
import * as T from "./test.capnp.js";

const FLOAT_TOLERANCE = 0.000001;

void tap.test("TestEnum", (t) => {
  t.equal(T.TestEnum.foo, 0);
  t.equal(T.TestEnum.bar, 1);
  t.equal(T.TestEnum.baz, 2);
  t.equal(T.TestEnum.qux, 3);
  t.equal(T.TestEnum.quux, 4);
  t.equal(T.TestEnum.corge, 5);
  t.equal(T.TestEnum.grault, 6);
  t.equal(T.TestEnum.garply, 7);

  t.end();
});

void tap.test("TestAllTypes", (t) => {
  const allTypes = new capnp.Message().initRoot(T.TestAllTypes);

  allTypes.setBoolField(true);
  t.equal(allTypes.getBoolField(), true);

  allTypes.setInt8Field(-8);
  t.equal(allTypes.getInt8Field(), -8);

  allTypes.setInt16Field(-10000);
  t.equal(allTypes.getInt16Field(), -10000);

  allTypes.setInt32Field(-1000000);
  t.equal(allTypes.getInt32Field(), -1000000);

  allTypes.setInt64Field(BigInt(-0xc54c72d9));
  t.equal(allTypes.getInt64Field(), BigInt(-0xc54c72d9));

  allTypes.setUInt8Field(8);
  t.equal(allTypes.getUInt8Field(), 8);

  allTypes.setUInt16Field(65525);
  t.equal(allTypes.getUInt16Field(), 65525);

  allTypes.setUInt32Field(99999999);
  t.equal(allTypes.getUInt32Field(), 99999999);

  allTypes.setUInt64Field(BigInt(1099511627775));
  t.equal(allTypes.getUInt64Field(), BigInt(1099511627775));

  allTypes.setFloat32Field(-9.999);
  t.ok(Math.abs(allTypes.getFloat32Field() - -9.999) < FLOAT_TOLERANCE);

  allTypes.setFloat64Field(-999999999999.9);
  t.ok(Math.abs(allTypes.getFloat64Field() - -999999999999.9) < FLOAT_TOLERANCE);

  allTypes.setTextField("text");
  t.equal(allTypes.getTextField(), "text");

  allTypes.initStructField().setInt32Field(-999);
  t.equal(allTypes.getStructField().getInt32Field(), -999);

  allTypes.setEnumField(T.TestEnum.corge);
  t.equal(allTypes.getEnumField(), T.TestEnum.corge);

  allTypes.initVoidList(10);
  t.equal(allTypes.getVoidList().getLength(), 10);

  allTypes.initBoolList(2).set(1, true);
  t.equal(allTypes.getBoolList().get(1), true);

  allTypes.initInt8List(3).set(2, -8);
  t.equal(allTypes.getInt8List().get(2), -8);

  allTypes.initInt16List(3).set(2, -88);
  t.equal(allTypes.getInt16List().get(2), -88);

  allTypes.initInt32List(3).set(2, -888);
  t.equal(allTypes.getInt32List().get(2), -888);

  allTypes.initInt64List(3).set(2, BigInt(-8888));
  t.equal(allTypes.getInt64List().get(2), BigInt(-8888));

  allTypes.initUInt8List(3).set(2, 8);
  t.equal(allTypes.getUInt8List().get(2), 8);

  allTypes.initUInt16List(3).set(2, 88);
  t.equal(allTypes.getUInt16List().get(2), 88);

  allTypes.initUInt32List(3).set(2, 888);
  t.equal(allTypes.getUInt32List().get(2), 888);

  allTypes.initUInt64List(3).set(2, BigInt(8888));
  t.equal(allTypes.getUInt64List().get(2), BigInt(8888));

  allTypes.initTextList(4).set(2, "hi");
  t.equal(allTypes.getTextList().get(2), "hi");

  allTypes.initStructList(3).get(1).setUInt32Field(9999);
  t.equal(allTypes.getStructList().get(1).getUInt32Field(), 9999);

  allTypes.initEnumList(2).set(1, T.TestEnum.foo);
  t.equal(allTypes.getEnumList().get(1), T.TestEnum.foo);

  t.end();
});
